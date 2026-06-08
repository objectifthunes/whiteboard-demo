import { CodeBlock } from '@/components/CodeBlock'
import { DocPage } from '@/components/DocPage'
import { DocSection } from '@/components/DocSection'
import { Preview } from '@/components/Preview'
import { VariantsDemo, LoadingDemo, RowDemo, CloseDemo, ThemeDemo } from './client'

const BASIC = `import { Button } from '@objectifthunes/whiteboard'

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Delete</Button>
<Button disabled>Disabled</Button>`

const LOADING = `<Button loading loadingText="Saving…">Save</Button>`

const ROW = `import { Button, ButtonRow } from '@objectifthunes/whiteboard'

<ButtonRow>
  <Button variant="secondary">Cancel</Button>
  <Button>Confirm</Button>
</ButtonRow>`

const CLOSE = `import { PanelCloseButton } from '@objectifthunes/whiteboard'

<PanelCloseButton onClick={onClose} />`

const THEME = `import { ThemeToggle } from '@objectifthunes/whiteboard'

const [theme, setTheme] = useState<'light' | 'dark'>('light')
useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

<ThemeToggle theme={theme} onToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />`

export default async function ButtonsPage() {
  return (
    <DocPage
      title="Buttons"
      lead="One Button component with three variants, a ButtonRow for grouped layouts, a pre-built panel close button, and a controlled theme toggle."
    >
      <DocSection
        title="Button variants"
        description="Primary, secondary, and danger. Defaults to type='button' so it never accidentally submits a form."
      >
        <Preview><VariantsDemo /></Preview>
        <CodeBlock code={BASIC} />
      </DocSection>

      <DocSection
        title="Loading state"
        description="`loading` disables the button, prefixes a spinner, and swaps the label for `loadingText` (when provided)."
      >
        <Preview><LoadingDemo /></Preview>
        <CodeBlock code={LOADING} />
      </DocSection>

      <DocSection
        title="ButtonRow"
        description="Equal-sized children via flex: 1 1 0 — drop-in for action footers."
      >
        <Preview><RowDemo /></Preview>
        <CodeBlock code={ROW} />
      </DocSection>

      <DocSection
        title="PanelCloseButton"
        description="Pre-built secondary button with an X icon — use inside a panel's headerActions."
      >
        <Preview><CloseDemo /></Preview>
        <CodeBlock code={CLOSE} />
      </DocSection>

      <DocSection
        title="ThemeToggle"
        description="Controlled — owns no DOM state. You decide where the data-theme attribute lives (almost always <html>)."
      >
        <Preview><ThemeDemo /></Preview>
        <CodeBlock code={THEME} />
      </DocSection>
    </DocPage>
  )
}
