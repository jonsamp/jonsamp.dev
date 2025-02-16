import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  try {
    // Read the PEM file from your project
    const filePath = path.join(process.cwd(), 'certificates', 'com.tesla.3p.public-key.pem');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Return the file with appropriate headers
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'application/x-pem-file',
        'Content-Disposition': 'inline; filename="com.tesla.3p.public-key.pem"'
      },
    });
  } catch (error) {
    return new NextResponse('Error loading PEM file', { status: 500 });
  }
} 