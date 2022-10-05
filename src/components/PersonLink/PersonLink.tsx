import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

type Props = {
  person: Person;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  return (
    <>
      <td>
        <Link
          to={`../${person.name}`}
          className={classNames(
            { 'has-text-danger': person.sex === 'f' },
          )}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {
          person.motherName?.length
            ? (
              (
                <Link
                  to={`../${person.motherName}`}
                  className="has-text-danger"
                >
                  {person.motherName}
                </Link>
              )
            )
            : '-'
        }
      </td>
      <td>
        <Link to={`../${person.fatherName}`}>
          {
            person.fatherName?.length
              ? person.fatherName
              : '-'
          }
        </Link>
      </td>
    </>
  );
};
