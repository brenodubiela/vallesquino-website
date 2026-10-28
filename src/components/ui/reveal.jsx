// Tempo para o loader de página sair de cena antes do conteúdo acima da dobra aparecer.
export const INTRO_DELAY = 0.85;

export function Reveal({ as: Tag = "div", delay = 0, className, style, children, ...props }) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={delay ? { "--reveal-delay": `${delay}s`, ...style } : style}
      {...props}
    >
      {children}
    </Tag>
  );
}
