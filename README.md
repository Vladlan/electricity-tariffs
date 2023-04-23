# ElectricityTariffs

### How to run
1. You should have `nodejs`, `docker 20.10.xx` and `docker-compose v2.xx.x`
2. Run `docker build . -t electricity-tariffs-base-img:nx-dev` to build builder image which will be required for docker-compose app images
3. Run `docker-compose up` to up front and back
3. Run `npm run mock-external-tariff-server` to run mock external electricity tariffs server

### Useful commands for development
```bash
# generate lib
npx nx g @nrwl/js:lib mylib

# to build front with stats
nx build front --stats-json

# to test common lib
nx test common

# to create a component
nx generate @nrwl/angular:component ../components/search --project=front --standalone
  
# to create a service
nx generate @nrwl/angular:service ../services/electricity-tariffs --project=front

# to create an interceptor
nx generate @nrwl/angular:interceptor ../interceptors/http-error --project=front

# Root builder image for monorepo
docker build . -t electricity-tariffs-base-img:nx-dev

# To run apps in dev mode from docker
docker-compose up

# To see a diagram of the dependencies of the projects.
nx graph
