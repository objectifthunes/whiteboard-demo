'use client'

import { Button, Chip, Divider, Toolbar } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', padding: '1rem 0' }}>
      <Toolbar position="static" end={<Button variant="secondary" iconOnly title="Theme">☀</Button>}>
        <Button variant="secondary" iconOnly title="Projects">⌂</Button>
        <strong style={{ fontSize: 'var(--wb-fs-base)' }}>Magic Floor Plan</strong>
        <Chip>maison-cedre.pdf</Chip>
        <Divider orientation="vertical" />
        <Button variant="secondary">Import</Button>
        <Button variant="primary">✦ AI</Button>
      </Toolbar>
    </div>
  )
}
