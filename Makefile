# Some common targets for my blog

serve build:
	jekyll "$@" --trace --watch --future

clean:
	rm -rf _site
