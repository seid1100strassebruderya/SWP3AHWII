function Fehler(Parameter) {
    if ( Parameter === 3 || Parameter === 7) {
      throw new Error("Fehler");
    }
    return Error; 
  }

  for (let i = 0; i < Math.floor(Math.random() * 11) + 10; i++)
  {
    const randomParameter = Math.floor(Math.random() * 10); 
    try {
      Fehler(randomParameter);
      let Parameter = Math.random();
      Console.log(Parameter);
    } catch (error) {
      console.error("Fehler");
    }
  }

