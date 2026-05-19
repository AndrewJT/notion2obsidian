"use server"

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  try {
    const { name, email, message } = data
    
    const apiKey = process.env.RESEND_API_KEY || "re_KFjwBpCb_QBphrMQzNgqCusUKqjsASbhv"

    // Send email using Resend REST API directly to avoid mailparser issues
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "ghenea.andrew@gmail.com",
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    throw new Error("Failed to send email")
  }
}
