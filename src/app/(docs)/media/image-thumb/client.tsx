'use client'

import { ImageThumb } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 420 }}>
      <ImageThumb src={null} alt="No image" placeholder="No image" />
      <ImageThumb
        src="https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=400&q=70"
        alt="Cabin in the woods"
        fit="contain"
      />
      <ImageThumb
        src="https://images.unsplash.com/photo-1503416997304-7f8bf166c121?w=400&q=70"
        alt="Cabin in the woods"
        fit="cover"
      />
    </div>
  )
}
