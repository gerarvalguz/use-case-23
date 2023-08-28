import faker from 'faker';

function generateSyntheticData() {
  const data = {
    titles: [],
    credits: [],
  };

  // Array of age certifications for more comprehensive testing
  const ageCertifications = [
    'G', 'PG', 'PG-13', 'R', 'NC-17', 'U', 'U/A', 'A', 'S', 
    'AL', '6', '9', '12', '12A', '15', '18', '18R', 'R18', 'R21', 
    'M', 'MA15+', 'R16', 'R18+', 'X18', 'T', 'E', 'E10+', 'EC', 'C',
    'CA', 'GP', 'M/PG', 'TV-Y', 'TV-Y7', 'TV-G', 'TV-PG', 'TV-14', 
    'TV-MA'
  ];

  for (let i = 1; i <= 120; i++) {
    const title = {
      id: i,
      title: faker.random.words(),
      description: faker.lorem.paragraph(),
      release_year: faker.date.past().getFullYear(),
      age_certification: faker.random.arrayElement(ageCertifications),
      runtime: faker.random.number({ min: 60, max: 180 }),
      genres: [faker.random.word(), faker.random.word()],
      production_country: faker.address.countryCode(),
      seasons: faker.random.number({ min: 1, max: 10 }),
    };
    data.titles.push(title);

    for (let j = 1; j <= 3; j++) { // Generate 3 credits per title
      const credit = {
        id: (i - 1) * 3 + j, // Generate unique ID based on title and credit index
        title_id: i,
        real_name: faker.name.findName(),
        character_name: faker.random.words(),
        role: faker.random.arrayElement([
          'Director', 'Producer', 'Screenwriter', 'Actor', 'Actress', 
          'Cinematographer', 'Film Editor', 'Production Designer', 
          'Costume Designer', 'Music Composer'
        ]),
      };
      data.credits.push(credit);
    }
  }

  return data;
}

export default generateSyntheticData;
