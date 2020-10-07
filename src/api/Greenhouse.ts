export const api = `https://boards-api.greenhouse.io/v1/boards/dmstech/`;

export const getJobs = () => {
  const endpoint = `departments?content=true`;
  return fetch(`${api}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      return data.departments
        .map((depts: any) => {
          if (depts.jobs.length > 0)
            return {
              departmentId: depts.id,
              departmentName: depts.name,
              jobs: depts.jobs,
            };
          else return null;
        })
        .filter(function (e: boolean) {
          return e;
        });
    });
};

export const getSelectedJob = (selectedJobId: string) => {
  const endpoint = `jobs/${selectedJobId}?questions=true`;
  return fetch(`${api}${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
