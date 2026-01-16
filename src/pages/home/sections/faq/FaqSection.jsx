import * as Accordion from '@radix-ui/react-accordion';
import './faq-section.scss';

const faqs = [
  { q: 'Do I need to be home?', a: 'No. As long as we can access the yard, you don’t need to be home.' },
  { q: 'What about dogs in the yard?', a: 'We can service with friendly dogs present, or you can secure them inside.' },
  { q: 'What happens to the waste?', a: 'We double-bag and dispose per your preference (your bin or haul-away).' },
];

export default function FaqSection() {
  return (
    <section id="faq" className="home-section-faq">
      <h2>FAQ</h2>

      <Accordion.Root type="single" collapsible className="faq-list">
        {faqs.map((f, i) => (
          <Accordion.Item key={f.q} value={`item-${i}`} className="faq-item">
            <Accordion.Header>
              <Accordion.Trigger className="faq-trigger">
                {f.q}
                <span className="faq-icon">+</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="faq-content">
              <p>{f.a}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
