# RoguesKnights

## Main Game Loop

Text based team building game to simulate assassins. The low level idea of the game loop.

```plant-uml

@startuml
start
:Initialize Game;
while (round < 5)
  :Start of Round;
  :Display Current Player;
  :Display Player Options;
  if (Player Chooses Action)
    :Perform Action;
    if (Action is Assassination)
      if (Assassination is Successful)
        :Eliminate Target;
        if (Remaining Players > 1)
          :Assign New Target;
        else
          stop
        endif
      else
        :Action Failed;
      endif
    else if (Action is Gather Information)
      :Gather Information;
    else if (Action is Move)
      :Move to New Location;
    endif
  else
    :Player Skips Turn;
  endif
  :End of Round;
  :Increment Round;
endwhile
:Game Over;
stop
@enduml

```

## Basic Initial Idea of console commands

### Commands:

`interact` or `touch`: Allows a player to interact with their target.

`gather` or `investigate`: Enables a player to gather information about other players.

`move` or `go`: Allows a player to move to a different location within the game environment.

`skip` or `pass`: Allows a player to skip their turn.

`help`: Displays a list of available commands and their usage.

`quit` or `exit`: Allows a player to exit the game.

#### Example Outputs:

`interact`:
```bash
Output: "You successfully assassinated your target! Their target is now your new target."
Output: "You attempted to assassinate your target, but they dodged your attack!"
```

`gather`:

```bash
Output: "You gathered some information. Player X has Player Y as their target."
Output: "You couldn't find any useful information this time."
```

`move`:

```bash
Output: "You moved to the new location."
Output: "You attempted to move, but you encountered an obstacle and couldn't proceed."
```

`skip`:

```bash
"You decided to skip your turn."
```

`help`:

Output:

```yaml
Available commands:
- interact: Interact with your target.
- gather: Gather information about other players.
- move: Move to a different location.
- skip: Skip your turn.
- help: Display available commands.
- quit: Exit the game.
"quit":
Output: "Exiting the game. Goodbye!"
```

### Examle idea of loop for a player

```vbnet
--- Round 1 ---
Player 1's Turn:
> interact
Output: You successfully assassinated your target! Their target is now your new target.

Player 2's Turn:
> gather
Output: You couldn't find any useful information this time.

--- Round 2 ---
Player 1's Turn:
> move
Output: You moved to the new location.

Player 2's Turn:
> interact
Output: You attempted to assassinate your target, but they dodged your attack!

--- Round 3 ---
Player 1's Turn:
> gather
Output: You gathered some information. Player 2 has Player 1 as their target.

Player 2's Turn:
> skip
Output: You decided to skip your turn.
```
