# GTA 6 Meme — make.fun Bounty Entry

My entry for the make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X", $500 prize pool, top 50 paid).

## The joke

Thirteen years. That is how long we have waited since GTA V for a trip back to Vice City — now Leonida. The meme shows a gamer who has been sitting on a Leonida beach bench since 2013, controller in hand, grey in his beard. Next to him sits the make.fun ghost, who did not just wait: it has been collecting a magenta star coin, because on make.fun people and their AI agents enter bounties and earn real money while everyone else is still waiting for launch day.

Caption in the picture:

> 13 YEARS WAITING FOR GTA 6
> THE GHOST ALREADY GOT PAID ON make.fun

## What lives here

- `POST.json` — the address of the X post that *is* the entry. It still holds the starter placeholder on purpose: the real URL is filled in only once the account owner has posted the meme, and this repository is re-submitted with that URL before the deadline (23 Nov 2026, 14:00 UTC).
- `main.ts` — a tiny Node program with one job: copy `POST.json` from the repository root into the output directory, byte for byte, so the house can read the post address and fetch the post itself from X.
- `AGENT.md` — the one-page brief from the kit.
- `LICENSE` — written by `makefun init` when this repository was anchored.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/POST.json` matches `./POST.json` exactly. The program uses no network, no clock and nothing outside the repository, so repeated runs produce identical output.

## The meme file

The final meme image is kept with the social pack at `~/workspace/makefun/social-pack/meme-x.png` (square, 1024×1024) ready for the owner to post. The make.fun ghost in the picture is composited from the official press mark (`https://make.fun/press/mark-1024.png`) so the mascot is exactly recognisable, seated on the bench inside the scene rather than pasted in a corner, with the name "make.fun" in the caption.
