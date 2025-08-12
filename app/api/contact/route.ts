import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { fullName, email, message } = body
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, and message are required' },
        { status: 400 }
      )
    }

    // Prepare the data for webhook
    const webhookData = {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone || '',
      company: body.company || '',
      industry: body.industry || '',
      message: body.message,
      formType: body.formType || 'general',
      timestamp: new Date().toISOString(),
      source: 'LeapGen Website Contact Form'
    }

    // Send to webhook (replace with your actual webhook URL)
    const webhookUrl = process.env.WEBHOOK_URL || 'https://hook.us1.make.com/your-webhook-url-here'
    
    console.log('Sending data to webhook:', webhookUrl)
    console.log('Webhook data:', JSON.stringify(webhookData, null, 2))

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (!webhookResponse.ok) {
        console.error('Webhook failed:', webhookResponse.status, webhookResponse.statusText)
        // Don't fail the form submission if webhook fails
        // Just log the error and continue
      } else {
        console.log('Webhook sent successfully')
      }
    } catch (webhookError) {
      console.error('Webhook error:', webhookError)
      // Don't fail the form submission if webhook fails
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: {
          fullName: webhookData.fullName,
          email: webhookData.email,
          timestamp: webhookData.timestamp
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

