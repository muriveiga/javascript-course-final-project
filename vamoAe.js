function Register() {
  let registerEmail
  registerEmail = prompt('Digite seu email')

  let registerPassword
  registerPassword = prompt('Crie uma senha')

  let name
  name = prompt('Seu primeiro nome')

  let lastName
  lastName = prompt('Seu sobrenome')

  databaseUser.push({
    email: registerEmail,
    password: registerPassword,
    name: name,
    last_name: lastName
  })
  alert(`Bem-vindo(a) ${name} ${lastName}!`)
}

let databaseUser = [
  {
    email: 'joaosilva@gmail.com',
    password: 'jao1234',
    name: 'João',
    last_name: 'Silva'
  },
  {
    email: 'josésantos@gmail.com',
    password: 'zeh1234',
    name: 'José',
    last_name: 'Santos'
  },
  {
    email: 'joanalves@gmail.com',
    password: 'jojo12345',
    name: 'Joana',
    last_name: 'Alves'
  }
]

let databaseDriver = [
  {
    name: 'Luiza',
    car: 'Renault Logan',
    plate: 'FMS-8425',
    distance: 1.2,
    rating: 4.7,
    comments: ['Aceita pets.', 'Carro limpo e confortável.']
  },
  {
    name: 'Vitor',
    car: 'Fiat Siena',
    plate: 'JYC-3175',
    distance: 2.1,
    rating: 4.9,
    comments: ['Bom motorista.']
  },
  {
    name: 'Gabriel',
    car: 'Chevrolet Onix',
    plate: 'KAY-2068',
    distance: 0.4,
    rating: 4.5,
    comments: ['Boas rotas.', 'Carro limpo e confortável.']
  }
]

let email
let password

let state = []

let startNeighborhood
let startCity
let startState

let finishNeighborhood
let finishCity
let finishState

let rating
let comment

let driversByDistance = databaseDriver.sort((a, b) => a.distance - b.distance)
let closestDriver = driversByDistance[0]

email = prompt('Bem-vindo ao Vamo Ae! \nDigite seu e-mail para acessar o app.')
password = prompt('Digite sua senha')

for (user in databaseUser) {
  if (email === databaseUser[user].email) {
    if (password === databaseUser[user].password) {
      state = [databaseUser[user].name, databaseUser[user].last_name]
    }
  }
}

if (state.length > 0) {
  alert(`Bem-vindo(a) ${state[0]} ${state[1]}!`)
} else {
  alert(
    'Dados não encontrados! \nRealizaremos um cadastro para que você tenha acesso ao app.'
  )
  Register()
}

startNeighborhood = prompt('Nos conte onde você está!\nBairro')
startCity = prompt('Cidade')
startState = prompt('Estado')

finishNeighborhood = prompt('Agora para onde você quer ir!\nBairro')
finishCity = prompt('Cidade')
finishState = prompt('Estado')

alert(`Seu motorista chegará em breve!
\n${closestDriver.name}\n${closestDriver.car}\n${closestDriver.plate}
\n${closestDriver.distance} Km\n${closestDriver.comments}`)

rating = prompt('Gostou da corrida? Dê uma nota de 0 a 5 ao motorista!')
comment = prompt('O que você achou do(a) motorista?')

for (driver in databaseDriver) {
  if (databaseDriver[driver] === closestDriver.name) {
    databaseDriver[driver].rating = rating
    databaseDriver[driver].comments.push(comment)
  }
}

alert('Obrigado por usar o Vamo Ae! Volte sempre!')

state = []



