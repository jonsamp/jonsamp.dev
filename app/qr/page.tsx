import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QR Code',
  description: 'QR Code page',
};

export const dynamic = 'force-static';

export default function QRPage() {
  return (
    <div>
      <img src="https://qr.expo.dev/eas-update?slug=&projectId=project-id&groupId=group-id&host=u.expo.dev" alt="QR Code" style={{ height: '300px' }} />
    </div>
  );
}
