import Image from "next/image"

const Spinner = (): JSX.Element => {
  return (
    <div className='spinner__load'>
      <Image src='/img/Spinner-1s-200px.svg' alt='spiner loading' />
    </div>
  )
}

export default Spinner
