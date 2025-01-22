import './MyWork.css'
import mywork_data from '../../assets/mywork_data'


export default function MyWork() {

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Portfolio</h1>
        <hr />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return(
            <a key={index} href={work.w_href} target='_blank' rel='noopener noreferrer'>
              <img src={work.w_img} alt='picture of my work' />
            </a>
          ) ;
        })}
      </div>
    </div>
  )
}
