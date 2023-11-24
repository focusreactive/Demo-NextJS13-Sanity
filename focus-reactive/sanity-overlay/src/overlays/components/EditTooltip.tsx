import { autoUpdate, useFloating } from '@floating-ui/react-dom';
import { Button } from '@sanity/ui';
import { ComponentProps, CSSProperties, forwardRef, type JSX, PropsWithChildren, useEffect, useRef } from 'react';

const OverlayButton = (
  {
    isButton,
    href,
    onMouseLeave,
    onClick,
    children,
    tone,
    style,
    icon,
  }: PropsWithChildren<
    {
      isButton: boolean;
    } & Pick<ComponentProps<typeof Button>, 'tone' | 'onClick' | 'onMouseLeave' | 'href' | 'style' | 'icon'>
  >,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <Button
      as={isButton ? 'button' : 'a'}
      href={isButton ? undefined : href}
      target={isButton ? undefined : '_blank'}
      rel={isButton ? undefined : 'noreferrer'}
      ref={ref}
      fontSize={1}
      padding={2}
      tone={tone}
      text={children}
      onMouseLeave={onMouseLeave}
      style={{
        textDecoration: 'none',
        outline: 'none',
        position: 'static',
        pointerEvents: 'auto',
        ...style,
      }}
      onClick={onClick}
      icon={icon}
    />
  );
};

const OverlayButtonRef = forwardRef(OverlayButton);

const commonIconStyles = {
  width: 18,
  height: 'auto',
  top: 1,
  position: 'relative',
  fill: '#fff',
} satisfies CSSProperties;

const CopyIcon = (
  <svg
    height="800px"
    width="800px"
    viewBox="0 0 24 24"
    style={{
      ...commonIconStyles,
      width: 16,
      top: 0,
    }}
  >
    <path d="M24,24H6V6h18V24z M8,22h14V8H8V22z M4,18H0v-4h2v2h2V18z M2,12H0V6h2V12z M18,4h-2V2h-2V0h4V4z M2,4H0V0h4v2H2V4z M12,2    H6V0h6V2z" />
  </svg>
);

const DuplicateIcon = (
  <svg
    style={{
      ...commonIconStyles,
      width: 17,
    }}
    width="800px"
    height="800px"
    viewBox="0 0 512 512"
  >
    <path d="M472,16H160a24.027,24.027,0,0,0-24,24V352a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V40A24.027,24.027,0,0,0,472,16Zm-8,328H168V48H464Z" />
    <path d="M344,464H48V168h56V136H40a24.027,24.027,0,0,0-24,24V472a24.027,24.027,0,0,0,24,24H352a24.027,24.027,0,0,0,24-24V408H344Z" />
  </svg>
);

const DeleteIcon = (
  <svg style={commonIconStyles} width="800px" height="800px" viewBox="0 0 1024 1024">
    <path d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z" />
    <path d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z" />
  </svg>
);

export function EditTooltip({ element, isLink }: { element: HTMLElement; isLink: boolean }): JSX.Element | null {
  const actionsContainerRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const { refs, floatingStyles } = useFloating({
    // @ts-expect-error - using a dummy value here gives us the desired placement. Undefined does NOT!
    placement: 'centered',
    whileElementsMounted: autoUpdate,
    elements: {
      reference: element,
    },
  });

  useEffect(() => {
    const onHover = () => {
      refs.floating.current?.style.setProperty('opacity', '1');
      actionsContainerRef.current?.style.setProperty('display', 'flex');
    };

    const onLeave = (event: MouseEvent) => {
      if (!areaRef.current) return;

      // check if mouse is currently over areaRef
      const { x, y } = event;
      const { top, left, width, height } = areaRef.current.getBoundingClientRect();

      if (x >= left && x <= left + width && y >= top && y <= top + height) {
        return;
      }

      refs.floating.current?.style.setProperty('opacity', '0');
      actionsContainerRef.current?.style.setProperty('display', 'none');
    };

    element.addEventListener('mouseenter', onHover);
    element.addEventListener('mouseleave', onLeave);

    return () => {
      element.removeEventListener('mouseenter', onHover);
      element.removeEventListener('mouseleave', onLeave);
    };
  }, [element, refs.floating, areaRef]);

  useEffect(() => {
    if (!areaRef.current || !actionsContainerRef.current) return;

    const onHover = () => {
      refs.floating.current?.style.setProperty('opacity', '1');
      actionsContainerRef.current?.style.setProperty('display', 'flex');
    };

    const onLeave = (event: MouseEvent) => {
      if (!actionsContainerRef.current) return;

      // check if mouse is currently over buttonRef
      const { x, y } = event;
      const { top, left, width, height } = actionsContainerRef.current.getBoundingClientRect();

      if (x >= left && x <= left + width && y >= top && y <= top + height) {
        return;
      }

      refs.floating.current?.style.setProperty('opacity', '0');
      actionsContainerRef.current?.style.setProperty('display', 'none');
    };

    areaRef.current?.addEventListener('mouseenter', onHover);
    areaRef.current?.addEventListener('mouseleave', onLeave);
  }, [areaRef, refs.floating]);

  if (!element.dataset.sanityStega) return null;

  const { width, height } = element.getBoundingClientRect();
  const { href, origin, data } = JSON.parse(element.dataset.sanityStega);

  const isButton = !isLink;

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          ...floatingStyles,
          transition: 'opacity .3s',
          opacity: 0,
          position: 'absolute',
          outline: '2px solid #06f',
          outlineOffset: '3px',
          pointerEvents: 'none',
          borderRadius: '1px',
          width: width,
          height: height,
        }}
        ref={refs.setFloating}
      >
        <div
          ref={areaRef}
          style={{
            position: 'absolute',
            pointerEvents: 'visibleFill',
            top: -10,
            left: 5,
            zIndex: 98,
            bottom: 0,
            width: '100%',
            height: 20,
          }}
        />

        <div
          style={{
            position: 'absolute',
            zIndex: 99,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            transform: 'translateY(-100%)',
            top: 0,
            right: -5,
            paddingBottom: 9,
            gap: 3,
          }}
          ref={actionsContainerRef}
          onMouseLeave={(e) => {
            // console.log(actionsContainerRef.current?.contains?.(e.relatedTarget as Node));
            refs.floating.current?.style.setProperty('opacity', '0');
            actionsContainerRef.current?.style.setProperty('display', 'none');
          }}
        >
          <OverlayButtonRef tone={'caution'} isButton={isButton} href={href} onClick={() => {}} icon={CopyIcon} />

          <OverlayButtonRef tone={'positive'} isButton={isButton} href={href} onClick={() => {}} icon={DuplicateIcon} />

          <OverlayButtonRef tone={'critical'} isButton={isButton} href={href} onClick={() => {}} icon={DeleteIcon} />

          <OverlayButtonRef
            tone={'primary'}
            isButton={isButton}
            href={href}
            onClick={() => {
              if (typeof window === 'undefined') return;

              const event = new CustomEvent('edit:open', {
                detail: {
                  data: isButton,
                  href,
                  origin,
                },
              });

              window.dispatchEvent(event);
            }}
          >
            Edit
          </OverlayButtonRef>
        </div>
      </div>
    </div>
  );
}
