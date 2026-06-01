import { motion, type MotionStyle } from 'framer-motion'
import type { ReactNode } from 'react'

type ProductCinemaFrameProps = {
  src: string
  alt: string
  onClick?: () => void
  imageStyle?: MotionStyle
  className?: string
  frameClassName?: string
  loading?: 'eager' | 'lazy'
  children?: ReactNode
}

export function ProductCinemaFrame({
  src,
  alt,
  onClick,
  imageStyle,
  className = '',
  frameClassName = '',
  loading = 'lazy',
  children,
}: ProductCinemaFrameProps) {
  const Tag = onClick ? 'button' : 'div'

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`rs-cinema-frame group ${onClick ? 'rs-cinema-frame--interactive' : ''} ${className}`}
      aria-label={onClick ? `${alt} — vergrössern` : undefined}
    >
      <div className={`rs-cinema-frame-inner ${frameClassName}`}>
        <motion.img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          width={1920}
          height={1080}
          className="rs-cinema-img"
          style={imageStyle}
          draggable={false}
        />
        {children}
      </div>
    </Tag>
  )
}
