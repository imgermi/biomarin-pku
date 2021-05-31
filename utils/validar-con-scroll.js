export default async (observer) => {
  // Valida form y scrollea al primer error
  if (!(await observer.validate())) {
    for (const key of Object.keys(observer.fields)) {
      if (observer.fields[key].invalid) {
        observer.refs[key].$el.scrollIntoView({
          behavior: 'smooth',
        })
        return false
      }
    }
  }
  return true
}
