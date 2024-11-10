// components/Work.tsx
import Image from 'next/image';
import './work.css';
import f from "../../public/f.png";
import p from "../../public/p.png";
import food from "../../public/food.jpg";

export default function Work() {
  const works = [
    {
      id: 1,
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: p, // Correct path
    },
    {
      id: 2,
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: f, // Correct path, remove `/public`
    },
    {
      id: 3,
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: food, // Correct path
    },
  ];

  return (
    <section id="work" className="workSection">
      <h2 className="heading">Featured Works</h2>
      <div className="worksContainer">
        {works.map((work) => (
          <div key={work.id} className="workItem">
            <Image
              src={work.image}
              alt={work.title}
              width={250}
              height={300}
              className="image"
            />
            <div className="content">
              <h3 className="title">{work.title}</h3>
              <div className="meta">
                <span className="year">{work.year}</span>
                <span className="category">{work.category}</span>
              </div>
              <p className="description">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
