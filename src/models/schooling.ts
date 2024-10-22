class Schooling {
  institution: string;
  degree: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;

  constructor(
    institution: string,
    degree: string,
    startMonth: string,
    startYear: number,
    endMonth: string,
    endYear: number,
  ) {
    this.institution = institution;
    this.degree = degree;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.endMonth = endMonth;
    this.endYear = endYear;
  }
}

export default Schooling;
