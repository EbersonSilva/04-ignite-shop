import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return 
  (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        
      </ProductDetails>
    </ProductContainer>
  )
}
