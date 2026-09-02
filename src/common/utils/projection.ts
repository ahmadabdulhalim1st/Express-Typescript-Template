export const parsProjection = (fieldsQuery: string) => {
  if (!fieldsQuery || fieldsQuery.trim() === "") return { __v: 0 };
  const project: Record<string, number> = {};
  const fields = fieldsQuery.split(",");
  fields.forEach((field) => {
    const cleanField = field.trim();
    project[cleanField] = 1;
  });

  project._id = 0;
  return project;
};
