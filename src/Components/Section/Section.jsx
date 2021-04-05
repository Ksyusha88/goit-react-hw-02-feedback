import style from './Section.module.css';

const Section = ({title, children}) =>(
<section className = {style.title}>
    <h1>{title}</h1>
    {children}
  </section>
);
export default Section
