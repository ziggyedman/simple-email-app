import { Body, Button, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components';

export default function ResetPasswordEmail({ resetUrl }: { resetUrl: string }) {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ backgroundColor: '#ffffff', margin: '24px auto', padding: '32px', borderRadius: '12px' }}>
          <Heading>Reset your password</Heading>
          <Text>We received a request to reset your password.</Text>
          <Section>
            <Button href={resetUrl} style={{ backgroundColor: '#2563eb', color: '#fff', padding: '12px 18px', borderRadius: '8px' }}>Reset password</Button>
          </Section>
          <Text>This link expires in 1 hour.</Text>
        </Container>
      </Body>
    </Html>
  );
}
