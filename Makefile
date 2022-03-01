.PHONY: all
all: install

.PHONY: install
install: themes/.flag
themes/.flag: .gitmodules
	git submodule init
	git submodule update
	@ touch $@

.PHONY: build
build: install
	hugo --verbose

.PHONY: test
test: build

.PHONY: run
run: install
	hugo serve

.PHONY: run-production
run-production: build
	sappy public --port=1313

.PHONY: clean
clean:
	rm -rf public themes
