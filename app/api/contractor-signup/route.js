import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // or your real redirect URI
);

// Set your refresh token here
oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

export async function POST(request) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    complianceDocs,
    equipmentPhotos
  } = await request.json();

  console.log(email);

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.SMTP_SERVER_USERNAME,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token // from oAuth2Client.getAccessToken()
      }
    });

    await transporter.sendMail({
      from: `NEW - Contractor Sign Up Request - <${process.env.SMTP_SERVER_USERNAME}>`,
      to: `${process.env.SMTP_SERVER_USERNAME}`,
      replyTo: email,
      subject: `Contact Form Request From ${firstName} ${lastName}`,
      text: `
      Name: ${firstName || ""} ${lastName || ""}
      Email: ${email || ""}
      Phone Number: ${phoneNumber || ""}
      Compliance:
      ${complianceDocs?.map(photo => {
        {
          photo?.document_type === "ContractorProfile" &&
            `Profile Picture: ${photo?.photo_url}`;
        }
        {
          photo?.document_type === "ProofOfInsurance" &&
            `Profile of Insurance: ${photo?.photo_url} `;
        }
        {
          photo?.document_type === "BusinessLicense" &&
            `Business License: ${photo?.photo_url}`;
        }
      })}
      Equipment Photos: 
      ${equipmentPhotos?.map(photo => {
        {
          photo?.document_type === "Truck" && `Truck: ${photo?.photo_url}`;
        }
        {
          photo?.document_type === "Machine" &&
            `Stump Machine: ${photo?.photo_url}`;
        }
      })}
      `
    });

    // To Client
    await transporter.sendMail({
      from: `Stump Specialist Sign Up Received From eStump - <${process.env.SMTP_SERVER_USERNAME}>`,
      to: email,
      replyTo: email,
      subject: `Thank You For Reaching Out to eStump`,
      text: `Thank you ${firstName} ${lastName} for reaching out to eStump. We will reach out to you within the next 48-72 hours with next steps.`
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to send email",
      status: 500
    });
  }
}
