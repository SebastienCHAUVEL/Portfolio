import Cv from '../../assets/CV.png'

export default function CvPage() {
  return(
    <section className='cv'>
      <h2>Curriculum Vitae</h2>
      <img src={Cv} alt="Curriculum Vitae" className='cv'/>
    </section>
  )
}