import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colors, typography, spacing } from './tokens';
import Button from './components/atoms/Button/Button';
import Badge from './components/atoms/Badge/Badge';
import Input from './components/atoms/Input/Input';
import Avatar from './components/atoms/Avatar/Avatar';
import Toggle from './components/atoms/Toggle/Toggle';
import Card from './components/molecules/Card/Card';
import Alert from './components/molecules/Alert/Alert';
import Modal from './components/molecules/Modal/Modal';
import Tooltip from './components/molecules/Tooltip/Tooltip';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${colors.neutral[950]}; color: ${colors.neutral[100]}; font-family: ${typography.fontFamily.sans}; -webkit-font-smoothing: antialiased; }
`;

const Page = styled.div`max-width: 1100px; margin: 0 auto; padding: ${spacing[8]} ${spacing[6]};`;
const Logo = styled.h1`font-size: ${typography.fontSize['3xl']}; font-weight: ${typography.fontWeight.bold}; background: linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: ${spacing[2]};`;
const Subtitle = styled.p`color: ${colors.neutral[400]}; font-size: ${typography.fontSize.lg}; margin-bottom: ${spacing[12]};`;
const Section = styled.section`margin-bottom: ${spacing[12]};`;
const SectionTitle = styled.h2`font-size: ${typography.fontSize.xl}; font-weight: ${typography.fontWeight.semibold}; color: ${colors.neutral[200]}; padding-bottom: ${spacing[3]}; border-bottom: 1px solid ${colors.neutral[800]}; margin-bottom: ${spacing[6]};`;
const Row = styled.div`display: flex; flex-wrap: wrap; align-items: center; gap: ${spacing[3]}; margin-bottom: ${spacing[4]};`;
const Grid = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: ${spacing[4]};`;
const TokenGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: ${spacing[3]};`;
const ColorSwatch = styled.div`border-radius: 8px; overflow: hidden; border: 1px solid ${colors.neutral[700]};`;
const SwatchColor = styled.div`height: 48px; background: ${({ color }) => color};`;
const SwatchLabel = styled.div`padding: ${spacing[2]}; background: ${colors.neutral[800]}; font-size: ${typography.fontSize.xs}; color: ${colors.neutral[400]};`;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);
  const [toggleDark, setToggleDark] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Page>
        <Logo>GurūFox Design System</Logo>
        <Subtitle>A dark-themed React component library built on atomic design principles.</Subtitle>

        <Section>
          <SectionTitle>Color Tokens</SectionTitle>
          <TokenGrid>
            {[
              { label: 'Brand Primary', color: colors.brand.primary },
              { label: 'Brand Secondary', color: colors.brand.secondary },
              { label: 'Success', color: colors.success.base },
              { label: 'Warning', color: colors.warning.base },
              { label: 'Error', color: colors.error.base },
              { label: 'Info', color: colors.info.base },
              { label: 'Neutral 900', color: colors.neutral[900] },
              { label: 'Neutral 800', color: colors.neutral[800] },
              { label: 'Neutral 700', color: colors.neutral[700] },
              { label: 'Neutral 500', color: colors.neutral[500] },
              { label: 'Neutral 300', color: colors.neutral[300] },
              { label: 'Neutral 0', color: colors.neutral[0] },
            ].map(({ label, color }) => (
              <ColorSwatch key={label}>
                <SwatchColor color={color} />
                <SwatchLabel>{label}<br />{color}</SwatchLabel>
              </ColorSwatch>
            ))}
          </TokenGrid>
        </Section>

        <Section>
          <SectionTitle>Button</SectionTitle>
          <Row>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </Row>
          <Row>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Row>
          <Row>
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </Row>
        </Section>

        <Section>
          <SectionTitle>Badge</SectionTitle>
          <Row>
            <Badge variant="default">Default</Badge>
            <Badge variant="success" showDot>Active</Badge>
            <Badge variant="warning" showDot>Pending</Badge>
            <Badge variant="error" showDot>Failed</Badge>
            <Badge variant="info">Info</Badge>
          </Row>
        </Section>

        <Section>
          <SectionTitle>Input</SectionTitle>
          <Grid>
            <Input label="Email address" placeholder="you@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" helperText="Must be at least 8 characters" />
            <Input label="Error state" placeholder="Something went wrong" error="This field is required" />
            <Input label="Disabled" placeholder="Cannot edit" disabled />
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Avatar</SectionTitle>
          <Row>
            <Avatar name="Kathlene de Vos" size="xs" />
            <Avatar name="Kathlene de Vos" size="sm" />
            <Avatar name="Kathlene de Vos" size="md" />
            <Avatar name="Kathlene de Vos" size="lg" />
            <Avatar name="Kathlene de Vos" size="xl" />
          </Row>
          <Row>
            <Avatar name="Online User" status="online" />
            <Avatar name="Away User" status="away" />
            <Avatar name="Busy User" status="busy" />
            <Avatar name="Square" shape="square" />
          </Row>
        </Section>

        <Section>
          <SectionTitle>Toggle</SectionTitle>
          <Row>
            <Toggle checked={toggleOn} onChange={() => setToggleOn(!toggleOn)} label="Notifications" />
            <Toggle checked={toggleDark} onChange={() => setToggleDark(!toggleDark)} label="Dark mode" />
            <Toggle checked={false} disabled label="Disabled" />
          </Row>
        </Section>

        <Section>
          <SectionTitle>Card</SectionTitle>
          <Grid>
            <Card variant="default">
              <Card.Header>
                <span style={{ fontWeight: 600 }}>Default Card</span>
                <Badge variant="success" size="sm">Active</Badge>
              </Card.Header>
              <Card.Body>This is the card body. Use it for any content that needs to be grouped together visually.</Card.Body>
              <Card.Footer>
                <Button size="sm" variant="ghost">Cancel</Button>
                <Button size="sm">Save</Button>
              </Card.Footer>
            </Card>
            <Card variant="elevated">
              <Card.Header><span style={{ fontWeight: 600 }}>Elevated Card</span></Card.Header>
              <Card.Body>Elevated cards use a stronger shadow to lift them off the background.</Card.Body>
            </Card>
            <Card variant="interactive" onClick={() => alert('Card clicked!')}>
              <Card.Body>
                <strong>Interactive Card</strong>
                <p style={{ marginTop: '8px', color: colors.neutral[400], fontSize: '0.875rem' }}>Hover over me. I am clickable and respond with a subtle lift effect.</p>
              </Card.Body>
            </Card>
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Alert</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            <Alert variant="success" title="Changes saved" description="Your profile has been updated successfully." dismissible />
            <Alert variant="warning" title="Storage almost full" description="You have used 90% of your storage. Consider upgrading." />
            <Alert variant="error" title="Payment failed" description="Your card was declined. Please check your payment details." dismissible />
            <Alert variant="info" title="New features available" description="We have added new AI-powered tools to your dashboard." />
          </div>
        </Section>

        <Section>
          <SectionTitle>Tooltip</SectionTitle>
          <Row>
            <Tooltip content="Appears above" position="top"><Button variant="ghost" size="sm">Top</Button></Tooltip>
            <Tooltip content="Appears below" position="bottom"><Button variant="ghost" size="sm">Bottom</Button></Tooltip>
            <Tooltip content="Appears on the left" position="left"><Button variant="ghost" size="sm">Left</Button></Tooltip>
            <Tooltip content="Appears on the right" position="right"><Button variant="ghost" size="sm">Right</Button></Tooltip>
          </Row>
        </Section>

        <Section>
          <SectionTitle>Modal</SectionTitle>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Delete workspace"
            footer={<><Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button><Button variant="danger" onClick={() => setModalOpen(false)}>Delete</Button></>}>
            <p>Are you sure you want to delete this workspace? This action cannot be undone and all data will be permanently removed.</p>
          </Modal>
        </Section>
      </Page>
    </>
  );
}

export default App;
