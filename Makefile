# Some common targets for my blog

serve:
	jekyll "$@" --trace --watch

clean:
	rm -rf _site
