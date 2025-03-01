import './style.scss'
import Text from "../helper/Text"
import Media from "../helper/Media"
import banner from "../../assets/images/placeholder.jpg"
import LinkEditor from '../helper/LinkEditor'

const attributes = {
   title: {
      type: 'string',
      default: '(Program)'
   },
   button_more: {
      type: 'string',
      default: 'lihat selengkapnya'
   },
   programs: {
      type: 'array',
      default: [
         {
            no: '01',
            title: 'Jalan Tani & Alat Tangkap Nelayan',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '02',
            title: 'Pendidikan Gratis',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '03',
            title: 'Dapur Sehat & Rumah Layak Huni',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '01',
            title: 'Jalan Tani & Alat Tangkap Nelayan',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '02',
            title: 'Pendidikan Gratis',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '03',
            title: 'Dapur Sehat & Rumah Layak Huni',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '02',
            title: 'Pendidikan Gratis',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '03',
            title: 'Dapur Sehat & Rumah Layak Huni',
            thumb: { url: banner },
            link_to: '#'
         },

         {
            no: '03',
            title: 'Dapur Sehat & Rumah Layak Huni',
            thumb: { url: banner },
            link_to: '#'
         }
      ]
   }
}

const TwoColumnText = (props) => {
   const { attributes: { programs } } = props


   const card = () => programs.map((item, index) => {
      const title = `programs.${index}.title`
      const no = `programs.${index}.no`
      const thumb = `programs.${index}.thumb`
      const link = `programs.${index}.link_to`
      return <div className='card-wrapper'>
         <div className='card'>
            <div className='card_a'>
               <Text className='card_a_a s4' tag="div" set={no} {...props} />
               <Text className='card_a_b b1' tag="div" set={title} {...props} />
            </div>
            <div className='card_b'>
               <Media set={thumb} {...props} />
               <LinkEditor set={link} {...props} />
            </div>
         </div>
      </div>
   })

   return (
      <section className="grid-card programs-section">
         <div className='heading'>
            <div className='heading-title'>
               <div className='h1'>(Prog</div><div className='container'></div><div className='h1'>ram)</div>
            </div>
            <div className='button-more'>
               <div className='inner-wrapper'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15">
                     <path fill="#fff"
                        d="M8.75 1.475c0 .814-1.25 3.275-1.25 3.275S6.25 2.29 6.25 1.475 6.808 0 7.499 0c.69 0 1.25.66 1.25 1.475h.001ZM1.475 6.25c.814 0 3.275 1.25 3.275 1.25S2.29 8.75 1.475 8.75 0 8.19 0 7.5s.66-1.25 1.475-1.25ZM6.25 13.525c0-.814 1.25-3.275 1.25-3.275s1.25 2.46 1.25 3.275S8.19 15 7.5 15s-1.25-.66-1.25-1.475ZM13.525 8.75c-.814 0-3.275-1.25-3.275-1.25s2.46-1.25 3.275-1.25S15 6.81 15 7.5s-.66 1.25-1.475 1.25ZM7.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  </svg>
                  <Text set="button_more" {...props} tag="a" />
                  <svg xmlns="http://www.w3.org/2000/svg" className='last-icon' fill="none" viewBox="0 0 15 15">
                     <path fill="#fff"
                        d="M8.75 1.475c0 .814-1.25 3.275-1.25 3.275S6.25 2.29 6.25 1.475 6.808 0 7.499 0c.69 0 1.25.66 1.25 1.475h.001ZM1.475 6.25c.814 0 3.275 1.25 3.275 1.25S2.29 8.75 1.475 8.75 0 8.19 0 7.5s.66-1.25 1.475-1.25ZM6.25 13.525c0-.814 1.25-3.275 1.25-3.275s1.25 2.46 1.25 3.275S8.19 15 7.5 15s-1.25-.66-1.25-1.475ZM13.525 8.75c-.814 0-3.275-1.25-3.275-1.25s2.46-1.25 3.275-1.25S15 6.81 15 7.5s-.66 1.25-1.475 1.25ZM7.5 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  </svg>
               </div>
            </div>
         </div>
         <div className='grid-card-wrapper grid'>
            {card()}
         </div>
      </section>
   )
}

export default TwoColumnText
export {
   attributes
}
