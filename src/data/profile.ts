export const profile1 = {
  name: "Joshua",
  fullName: "Israel Muthu S",

  designation: "Applied AI – Cloud Full-Stack Developer",

  careerStartDate: "2019-06-03",

  getExperienceYears() {
    const start = new Date(this.careerStartDate);
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();

    const anniversaryNotReached =
      today.getMonth() < start.getMonth() ||
      (today.getMonth() === start.getMonth() &&
        today.getDate() < start.getDate());

    if (anniversaryNotReached) {
      years--;
    }

    return years;
  },

  getExperienceLabel() {
    return `${this.getExperienceYears()}+ Years`;
  },
};