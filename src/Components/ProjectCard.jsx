import PropTypes from 'prop-types';
import './ProjectCard.css'; 

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes
}) => {
  return (
    <div className={`project-card ${classes}`}>

      <figure className="img-box">
        <img
          src={imgSrc}
          alt={title}
          loading='lazy'
          className="img-cover"
        />
      </figure>

      <div className="content">
        <div className="info">
          <h3 className="title">{title}</h3>

          <div className="tags">
            {tags.map((label, key) => (
              <span key={key} className="tag">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="icon-box">
          <span className="icon" aria-hidden="true">➡</span>
        </div>
      </div>

      <a href={projectLink} target='_blank' className="overlay"></a>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
}

export default ProjectCard;
