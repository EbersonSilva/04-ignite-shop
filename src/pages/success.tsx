import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer></ImageContainer>
      <p>
        Uhuul <strong>Eberson Silva</strong>, <strong></strong> sua Camisa ja
        esta a caminho da sua casa
      </p>
      <Link href={'/'}>Voltar ao catalogo</Link>
    </SuccessContainer>
    
  )
}
