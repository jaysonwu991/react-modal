# Quick Start Guide

Get up and running with @jayson991/react-ui in 2 minutes!

## Installation

```bash
npm install @jayson991/react-ui
# or
pnpm add @jayson991/react-ui
```

## Basic Usage

```tsx
import { Modal, Button, Input, Calendar } from '@jayson991/react-ui';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date as Date)}
        mode="single"
        showTodayButton
      />

      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        showModal={isOpen}
        onHideModal={() => setIsOpen(false)}
        title="Hello World"
      >
        <p>This is a modal!</p>
        {selectedDate && (
          <p>Selected: {selectedDate.toLocaleDateString()}</p>
        )}
      </Modal>
    </>
  );
}
```

## Common Patterns

### Form with Validation

```tsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      // Your login logic
      await login(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        fullWidth
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error}
        fullWidth
      />

      <Button
        onClick={handleSubmit}
        loading={loading}
        disabled={!email || !password}
        fullWidth
      >
        Log In
      </Button>
    </>
  );
}
```

### Confirmation Modal

```tsx
function DeleteButton({ itemName, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <Button
        variant="danger"
        onClick={() => setShowConfirm(true)}
      >
        Delete
      </Button>

      <Modal
        showModal={showConfirm}
        onHideModal={() => setShowConfirm(false)}
        title="Confirm Delete"
        size="small"
        centered
      >
        <p>Are you sure you want to delete "{itemName}"?</p>
        <p>This action cannot be undone.</p>

        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <Button
            variant="ghost"
            onClick={() => setShowConfirm(false)}
            fullWidth
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              onDelete();
              setShowConfirm(false);
            }}
            fullWidth
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}
```

### Input with Prefix/Suffix

```tsx
function PriceInput() {
  const [price, setPrice] = useState('');

  return (
    <Input
      label="Price"
      type="number"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      prefix={<span>$</span>}
      suffix={<span>USD</span>}
      helperText="Enter the product price"
    />
  );
}
```

### Date Range Picker

```tsx
import { Calendar, type DateRange } from '@jayson991/react-ui';

function BookingForm() {
  const [dateRange, setDateRange] = useState<DateRange | null>(null);

  const today = new Date();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(today.getFullYear() + 1);

  return (
    <div>
      <h3>Select booking dates</h3>
      <Calendar
        mode="range"
        value={dateRange}
        onChange={(range) => setDateRange(range as DateRange)}
        minDate={today}
        maxDate={oneYearFromNow}
        showWeekNumbers
        firstDayOfWeek={1}
      />
      {dateRange && (
        <p>
          From: {dateRange.start.toLocaleDateString()}
          To: {dateRange.end.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
```

### Multiple Date Selection

```tsx
function EventScheduler() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  return (
    <div>
      <Calendar
        mode="multiple"
        value={selectedDates}
        onChange={(dates) => setSelectedDates(dates as Date[])}
        showTodayButton
        showClearButton
      />
      <p>Selected {selectedDates.length} date(s)</p>
    </div>
  );
}
```

## Component Props Quick Reference

### Modal
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showModal` | boolean | - | **Required**. Controls visibility |
| `onHideModal` | function | - | **Required**. Called when closing |
| `title` | string | - | Modal header title |
| `size` | 'small'\|'medium'\|'large'\|'fullscreen' | 'medium' | Modal size |
| `centered` | boolean | false | Vertically center modal |
| `animated` | boolean | true | Enable fade animation |

### Button
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'primary'\|'secondary'\|'danger'\|'ghost' | 'primary' | Button style |
| `size` | 'small'\|'medium'\|'large' | 'medium' | Button size |
| `loading` | boolean | false | Show spinner, disable button |
| `fullWidth` | boolean | false | Stretch to full width |
| `disabled` | boolean | false | Disable button |

### Input
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | - | Input label text |
| `error` | string | - | Error message (shows red) |
| `helperText` | string | - | Helper text below input |
| `inputSize` | 'small'\|'medium'\|'large' | 'medium' | Input size |
| `fullWidth` | boolean | false | Stretch to full width |
| `prefix` | ReactNode | - | Element before input |
| `suffix` | ReactNode | - | Element after input |

### Icon
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | - | **Required**. Icon name without 'icon-' prefix |
| `type` | 'font'\|'svg' | 'font' | Icon type |
| `size` | number | 16 | Icon size in pixels |
| `color` | string | - | Icon color (hex, rgb, or named) |
| `onClick` | function | - | Click handler |
| `ariaLabel` | string | - | Accessibility label |

### Calendar
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | Date\|Date[]\|DateRange\|null | null | Selected date(s) |
| `onChange` | function | - | Called when date is selected |
| `mode` | 'single'\|'multiple'\|'range' | 'single' | Selection mode |
| `minDate` | Date | - | Minimum selectable date |
| `maxDate` | Date | - | Maximum selectable date |
| `firstDayOfWeek` | 0-6 | 0 | First day of week (0=Sunday) |
| `showWeekNumbers` | boolean | false | Display week numbers |
| `showTodayButton` | boolean | true | Show today button |
| `showClearButton` | boolean | true | Show clear button |
| `keyboardNavigation` | boolean | true | Enable keyboard navigation |
| `locale` | string | 'en-US' | Locale for date formatting |
| `disabled` | boolean | false | Disable the calendar |

## Custom Styling

All components accept `className` and `style` props:

```tsx
// Custom class
<Button className="my-button">Click</Button>

// Inline styles
<Input style={{ borderColor: 'blue' }} />
```

## TypeScript Support

Full TypeScript support included:

```tsx
import { ButtonProps, InputProps, ModalProps, CalendarProps, type DateRange } from '@jayson991/react-ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// Using DateRange type
const [range, setRange] = useState<DateRange | null>(null);
```

## Troubleshooting

### Styles not appearing?
Styles are automatically imported with components. If they're not working:
1. Check that your bundler supports CSS imports
2. Ensure peer dependencies are installed: `react >= 18.0.0`, `react-dom >= 18.0.0`

### TypeScript errors?
Make sure you have `@types/react` and `@types/react-dom` installed:
```bash
npm install -D @types/react @types/react-dom
```

## Next Steps

- 📖 Read the [full documentation](README.md)
- 🎨 Explore [Storybook examples](https://github.com/jaysonwu991/react-ui)
- 🤝 [Contribute](CONTRIBUTING.md) to the project
- 🐛 Report [issues](https://github.com/jaysonwu991/react-ui/issues)

## Need Help?

- Check the [README](README.md) for detailed documentation
- Browse [example code](src/components/)
- Open an [issue](https://github.com/jaysonwu991/react-ui/issues) on GitHub
