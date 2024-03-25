import { useSelector } from "react-redux";

const FavoritesCompanies = () => {
  const favoriteCompanies = useSelector((state) => state.companyFav.content);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favoriteCompanies.map((company) => (
          <li key={company._id}>
            <p>Company Name: {company.company_name}</p>
            <ul>
              {company.jobs.map((job) => (
                <li key={job._id}>{job.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesCompanies;
