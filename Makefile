build:
	docker compose build

up:
	docker compose up

down:
	docker compose down

test:
	docker compose run --rm app npm run test

test-one:
	docker compose run --rm app npm run test:watch $(ARGS)

check-types:
	docker compose run --rm app npm run check-types

before-commit:
	make check-types
	make test