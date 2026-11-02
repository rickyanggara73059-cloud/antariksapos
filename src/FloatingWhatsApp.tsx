import { whatsappHref } from './config';

export default function FloatingWhatsApp() {
  return <a
    className="floating-whatsapp"
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Konsultasi via WhatsApp dengan tim ANTARIKSA POS (buka di tab baru)"
  >
    <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true" focusable="false">
      <path fillRule="evenodd" d="M16 2a14 14 0 0 0-12.1 21.04L2 30l7.16-1.88A14 14 0 1 0 16 2Zm0 2.5a11.5 11.5 0 1 1-5.9 21.36l-.44-.26-4.1 1.08 1.1-4-.29-.46A11.5 11.5 0 0 1 16 4.5Z" clipRule="evenodd" />
      <path d="M11.23 9.13c-.26-.57-.52-.58-.77-.59h-.65c-.23 0-.6.09-.92.44-.32.35-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.24 2.4 3.85 5.97 5.24 2.97 1.17 3.57.93 4.21.87.65-.06 2.09-.85 2.38-1.67.3-.82.3-1.52.2-1.67-.09-.15-.32-.23-.67-.41-.35-.17-2.08-1.03-2.4-1.14-.32-.12-.55-.18-.79.17-.23.35-.9 1.14-1.1 1.38-.2.23-.4.26-.76.09-.35-.18-1.48-.55-2.82-1.75-1.04-.93-1.75-2.08-1.96-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.62.18-.2.23-.35.35-.59.12-.23.06-.44-.03-.61-.09-.18-.78-1.94-1.12-2.68Z" />
    </svg>
    <span className="floating-whatsapp-label" aria-hidden="true">Konsultasi via WhatsApp</span>
  </a>;
}
