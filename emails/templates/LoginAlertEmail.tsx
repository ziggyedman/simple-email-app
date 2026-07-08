import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';

export default function LoginAlertEmail({ timestamp }: { timestamp: string }) {
  return (
    <Html>
      <Head />
      <Preview>New login detected</Preview>
      <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ backgroundColor: '#ffffff', margin: '24px auto', padding: '32px', borderRadius: '12px' }}>
          <Heading>New login detected</Heading>
          <Text>Your account was just accessed.</Text>
          <Text><strong>Time:</strong> {timestamp}</Text>
          <Text>If this was not you, reset your password immediately.</Text>
        </Container>
      </Body>
    </Html>
  );
}
