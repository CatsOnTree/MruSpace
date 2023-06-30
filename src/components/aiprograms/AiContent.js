import React from 'react'
import AiComponent from './AiComponent'

export default function AiContent({aiactiveComponent}) {
    const AiContentObj={
boxlinegame:{
code: `
from tkinter import *
import numpy as np
size_of_board = 600
number_of_dots = 6
symbol_size = (size_of_board / 3 - size_of_board / 8) / 2
symbol_thickness = 50
dot_color = '#7BC043'
player1_color = '#0492CF'
player1_color_light = '#FFA07A'
player2_color = '#EE4035'
player2_color_light = '#E6E6FA'
Green_color = '#7BC043'
dot_width = 0.25*size_of_board/number_of_dots
edge_width = 0.1*size_of_board/number_of_dots
distance_between_dots = size_of_board / (number_of_dots)
class Dots_and_Boxes():
    def __init__(self):
        self.window = Tk()
        self.window.title('Dots_and_Boxes')
        self.canvas = Canvas(self.window, width=size_of_board, height=size_of_board)
        self.canvas.pack()
        self.window.bind('<Button-1>', self.click)
        self.player1_starts = True
        self.refresh_board()
        self.play_again()
    def play_again(self):
        self.refresh_board()
        self.board_status = np.zeros(shape=(number_of_dots - 1, number_of_dots - 1))
        self.row_status = np.zeros(shape=(number_of_dots, number_of_dots - 1))
        self.col_status = np.zeros(shape=(number_of_dots - 1, number_of_dots))
        self.player1_starts = not self.player1_starts
        self.player1_turn = not self.player1_starts
        self.reset_board = False
        self.turntext_handle = []
        self.already_marked_boxes = []
        self.display_turn_text()
    def mainloop(self):
        self.window.mainloop()
    def is_grid_occupied(self, logical_position, type):
        r = logical_position[0]
        c = logical_position[1]
        occupied = True
        if type == 'row' and self.row_status[c][r] == 0:
            occupied = False
        if type == 'col' and self.col_status[c][r] == 0:
            occupied = False
        return occupied
    def convert_grid_to_logical_position(self, grid_position):
        grid_position = np.array(grid_position)
        position = (grid_position-distance_between_dots/4)//(distance_between_dots/2)
        type = False
        logical_position = []
        if position[1] % 2 == 0 and (position[0] - 1) % 2 == 0:
            r = int((position[0]-1)//2)
            c = int(position[1]//2)
            logical_position = [r, c]
            type = 'row'
        elif position[0] % 2 == 0 and (position[1] - 1) % 2 == 0:
            c = int((position[1] - 1) // 2)
            r = int(position[0] // 2)
            logical_position = [r, c]
            type = 'col'
        return logical_position, type
    def mark_box(self):
        boxes = np.argwhere(self.board_status == -4)
        for box in boxes:
            if list(box) not in self.already_marked_boxes and list(box) !=[]:
                self.already_marked_boxes.append(list(box))
                color = player1_color_light
                self.shade_box(box, color)
        boxes = np.argwhere(self.board_status == 4)
        for box in boxes:
            if list(box) not in self.already_marked_boxes and list(box) !=[]:
                self.already_marked_boxes.append(list(box))
                color = player2_color_light
                self.shade_box(box, color)
    def update_board(self, type, logical_position):
        r = logical_position[0]
        c = logical_position[1]
        val = 1
        if self.player1_turn:
            val =- 1
        if c < (number_of_dots-1) and r < (number_of_dots-1):
            self.board_status[c][r] += val
        if type == 'row':
            self.row_status[c][r] = 1
            if c >= 1:
                self.board_status[c-1][r] += val
        elif type == 'col':
            self.col_status[c][r] = 1
            if r >= 1:
                self.board_status[c][r-1] += val
    def is_gameover(self):
        return (self.row_status == 1).all() and (self.col_status == 1).all()
    def make_edge(self, type, logical_position):
        if type == 'row':
            start_x = distance_between_dots/2 + logical_position[0]*distance_between_dots
            end_x = start_x+distance_between_dots
            start_y = distance_between_dots/2 + logical_position[1]*distance_between_dots
            end_y = start_y
        elif type == 'col':
            start_y = distance_between_dots / 2 + logical_position[1] * distance_between_dots
            end_y = start_y + distance_between_dots
            start_x = distance_between_dots / 2 + logical_position[0] * distance_between_dots
            end_x = start_x
        if self.player1_turn:
            color = player1_color
        else:
            color = player2_color
        self.canvas.create_line(start_x, start_y, end_x, end_y, fill=color, width=edge_width)
    def display_gameover(self):
        player1_score = len(np.argwhere(self.board_status == -4))
        player2_score = len(np.argwhere(self.board_status == 4))
        if player1_score > player2_score:
            text = 'Winner: Player 1 '
            color = player1_color
        elif player2_score > player1_score:
            text = 'Winner: Player 2 '
            color = player2_color
        else:
            text = 'Its a tie'
            color = 'gray'
        self.canvas.delete("all")
        self.canvas.create_text(size_of_board / 2, size_of_board / 3, font="cmr 60 bold", fill=color, text=text)
        score_text = 'Scores '
        self.canvas.create_text(size_of_board / 2, 5 * size_of_board / 8, font="cmr 40 bold", fill=Green_color,text=score_text)
        score_text = 'Player 1 : ' + str(player1_score) + '&'
        score_text += 'Player 2 : ' + str(player2_score) + ''
        self.canvas.create_text(size_of_board / 2, 3 * size_of_board / 4, font="cmr 30 bold", fill=Green_color,text=score_text)
        self.reset_board = True
        score_text = 'Click to play again '
        self.canvas.create_text(size_of_board / 2, 15 * size_of_board / 16, font="cmr 20 bold", fill="gray",text=score_text)
    def refresh_board(self):
        for i in range(number_of_dots):
            x = i*distance_between_dots+distance_between_dots/2
            self.canvas.create_line(x, distance_between_dots/2, x,
                                    size_of_board-distance_between_dots/2,
                                    fill='gray', dash = (2, 2))
            self.canvas.create_line(distance_between_dots/2, x,
                                    size_of_board-distance_between_dots/2, x,
                                    fill='gray', dash=(2, 2))
        for i in range(number_of_dots):
            for j in range(number_of_dots):
                start_x = i*distance_between_dots+distance_between_dots/2
                end_x = j*distance_between_dots+distance_between_dots/2
                self.canvas.create_oval(start_x-dot_width/2, end_x-dot_width/2, start_x+dot_width/2,end_x+dot_width/2, fill=dot_color,outline=dot_color)
    def display_turn_text(self):
        text = 'Next turn: '
        if self.player1_turn:
            text += 'Player1'
            color = player1_color
        else:
            text += 'Player2'
            color = player2_color

        self.canvas.delete(self.turntext_handle)
        self.turntext_handle = self.canvas.create_text(size_of_board - 5*len(text),size_of_board-distance_between_dots/8,font="cmr 15 bold", text=text, fill=color)
    def shade_box(self, box, color):
        start_x = distance_between_dots / 2 + box[1] * distance_between_dots + edge_width/2
        start_y = distance_between_dots / 2 + box[0] * distance_between_dots + edge_width/2
        end_x = start_x + distance_between_dots - edge_width
        end_y = start_y + distance_between_dots - edge_width
        self.canvas.create_rectangle(start_x, start_y, end_x, end_y, fill=color, outline='')
    def display_turn_text(self):
        text = 'Next turn: '
        if self.player1_turn:
            text += 'Player1'
            color = player1_color
        else:
            text += 'Player2'
            color = player2_color
        self.canvas.delete(self.turntext_handle)
        self.turntext_handle = self.canvas.create_text(size_of_board - 5*len(text),size_of_board-distance_between_dots/8,font="cmr 15 bold",text=text, fill=color)
    def click(self, event):
        if not self.reset_board:
            grid_position = [event.x, event.y]
            logical_positon, valid_input = self.convert_grid_to_logical_position(grid_position)
            if valid_input and not self.is_grid_occupied(logical_positon, valid_input):
                self.update_board(valid_input, logical_positon)
                self.make_edge(valid_input, logical_positon)
                self.mark_box()
                self.refresh_board()
                self.player1_turn = not self.player1_turn

                if self.is_gameover():
                    self.display_gameover()
                else:
                    self.display_turn_text()
        else:
            self.canvas.delete("all")
            self.play_again()
            self.reset_board = False
game_instance = Dots_and_Boxes()
game_instance.mainloop()
`,
output: `after executing prgm window will popup where you play game`,
heading:`Python Program for Box Line Game`
},

minjumps:{
code: `
def min_jumps_to_reach_home(jumps, start, end, max_jumps):
  """
  jumps: A list of integers representing the maximum number of jumps from each position
  start: The starting position
  end: The destination position
  max_jumps: The maximum number of jumps allowed from each position
  """
  n = len(jumps)
  unvisited = set(range(n))
  unvisited.remove(start)
  current_pos = start
  jumps_left = max_jumps
  min_jumps = 0
  
  while current_pos != end:
      if jumps_left == 0:
          # If we've used up all our jumps, we have to take a taxi
          min_jumps += 1
          jumps_left = max_jumps
      
      # Find the next position to jump to
      next_pos = None
      for pos in unvisited:
          if jumps[current_pos] >= abs(pos - current_pos):
              if next_pos is None or abs(pos - end) < abs(next_pos - end):
                  next_pos = pos
      
      if next_pos is None:
          # If we can't find a valid next position, we have to take a taxi
          return -1
      
      # Update our position and jumps_left
      current_pos = next_pos
      unvisited.remove(current_pos)
      jumps_left -= 1
      min_jumps += 1
  
  return min_jumps

jumps_list = [2, 5, 1, 1, 1, 2, 4, 2, 3, 4]
start_pos = 0
end_pos = 9
max_jumps_allowed = 3
min_jumps = min_jumps_to_reach_home(jumps_list, start_pos, end_pos, max_jumps_allowed)
print(f"The minimum number of jumps to reach home is {min_jumps}")
`,
output: `The minimum number of jumps to reach home is 7`,
heading:`Program to find minimum jumps to reach home in Python`
},

snakeladder:{
code:`
from collections import deque

def snakesAndLadders(board):
    N = len(board)
    visited = set()
    queue = deque([(1, 0)])
    while queue:
        square, steps = queue.popleft()      
        if square == N*N:
            return steps     
        for i in range(1, 7):
            next_square = square + i          
            if next_square > N*N:
                break        
            row, col = getRowCol(next_square, N)          
            if board[row][col] != -1:
                next_square = board[row][col]            
            if next_square not in visited:
                visited.add(next_square)
                queue.append((next_square, steps+1))            
    return -1
def getRowCol(square, N):
    row = (square - 1) // N
    col = (square - 1) % N   
    if row % 2 == 1:
        col = N - col - 1       
    row = N - row - 1 
    return row, col
board = [[-1, -1, -1, -1, -1, -1,-1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1,-1, -1, -1, -1],
    [-1, -1, -1, 92, -1, -1,-1, -1, -1, -1],
    [-1, 65, -1, -1, 13, -1,-1, -1, 94, -1],
    [-1, -1, -1, -1, -1, 88,-1, -1, -1, -1],
    [-1, 55, -1, -1, -1, -1,-1, -1, -1, -1],
      [-1, 24, -1, -1, -1, -1,-1, -1, -1, -1],
    [-1, -1, -1, -1, -1, 66,-1, -1, -1, -1],
    [-1, 62, -1, -1, 13, -1,-1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1,-1, -1, -1, -1]
]

board[8][6]=22
board[9][8]=10
result = snakesAndLadders(board)
print("The minimum number of throws required to win :",result)
` ,
output:`The minimum number of throws required to win : 6` ,
heading:`Implementation of BFS for Finding the minimum number of
throws required to win a given Snakes and Ladders board
game`
},

tixtactoe:{
code: `
board = ['_' for _ in range(9)]
player1 = "x"
player2 = "o"

def display_board():
    print(board[0], board[1], board[2])
    print(board[3], board[4], board[5])
    print(board[6], board[7], board[8])

def check_condition(player):
    conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]]
    for condition in conditions:
        if board[condition[0]] == player and board[condition[1]] == player and board[condition[2]] == player:
            return True
    return False

def start_game():
    display_board()
    current_player = player1
    while True:
        player_option = input(f"{current_player}, Enter your position: ")
        if player_option not in [str(i) for i in range(1, 10)]:
            print("please Enter [1-9]")
            continue

        position = int(player_option) - 1
        if board[position] == "_":
            board[position] = current_player
            display_board()
            if check_condition(current_player):
                return f"winner: {current_player}"
            if "_" not in board:
                return "Tie Game!"
            current_player = player2 if current_player == player1 else player1
        else:
            print("this place is not empty")
            
print(start_game())
`,
output:`_ _ _
_ _ _
_ _ _
x, Enter your position: 2
_ x _
_ _ _
_ _ _
o, Enter your position: 1
o x _
_ _ _
_ _ _
x, Enter your position: 5
o x _
_ x _
_ _ _
o, Enter your position: 9
o x _
_ x _
_ _ o
x, Enter your position: 8
o x _
_ x _
_ x o
winner: x` ,
heading:`Python Program for Tic-Tac-Toe Game`
},

tspvalue:{
code:  `
import random

def tsp_heuristic(tsp, start_city):
    """
    tsp: A list of lists representing the distances between cities
    start_city: The index of the city to start from
    """
    n = len(tsp)
    unvisited = set(range(n))
    unvisited.remove(start_city)
    current_city = start_city
    tour = [current_city]
    
    while unvisited:
        next_city = min(unvisited, key=lambda x: tsp[current_city][x])
        unvisited.remove(next_city)
        tour.append(next_city)
        current_city = next_city
    
    tour.append(start_city)
    return tour

def tsp(tsp):
    """
    tsp: A list of lists representing the distances between cities
    """
    n = len(tsp)
    best_tour = None
    best_distance = float('inf')
    
    for i in range(n):
        tour = tsp_heuristic(tsp, i)
        distance = sum(tsp[tour[j]][tour[j+1]] for j in range(n))
        if distance < best_distance:
            best_tour = tour
            best_distance = distance
    
    return best_tour, best_distance
tsp_list = [[0,400,500,300],[400,0,300,500],[500,300,0,400],[300,500,400,0]]
best_tour, best_distance = tsp(tsp_list)
print(f"The best tour is {best_tour} with a distance of {best_distance}")
`,
output: `Implementation of TSP using heuristic approach using PYTHON`,
heading:`The best tour is [0, 3, 2, 1, 0] with a distance of 1400`
},

waterjug:{
code: `from collections import defaultdict
jug1,jug2,aim=4,3,2
visited = defaultdict(lambda:False)
def waterjugsolver(amt1,amt2):
    if(amt1==aim and amt2==0)or (amt2==aim and amt1==0):
        print(amt1,amt2)
        return True
    if visited[(amt1,amt2)]==False:
        print(amt1,amt2)
        visited[(amt1,amt2)]=True
        return(waterjugsolver(0,amt2) or
                waterjugsolver(amt1,0) or
                waterjugsolver(jug1,amt2)or 
                waterjugsolver(amt1+min(amt2,(jug1-amt1)),amt2-min(amt2,(jug1-amt1)))or
                waterjugsolver(amt1-min(amt1,(jug2-amt2)),amt2+min(amt1,(jug2-amt2))))
    else:
        return False
print("Steps :")
waterjugsolver(0,0)
waterjugsolver(2,0)`,
output: `Steps :
0 0
4 0
1 3
0 3
4 3
3 0
1 0
0 1
4 1
2 3
2 0
2 0`,
heading:`Water Jug problem using Python Algorithm`
},
towerofhanoi:{
code:`def TowerOfHanoi(n,from_rod,to_rod,aux_rod):
    stack=[]
    stack.append((n,from_rod,to_rod,aux_rod))
    while stack:
        disks,source,destination,auxiliary = stack.pop()
        if disks==0:
            continue
        if disks==1:
            print(f"Move disk 1 from rod {source} to rod {destination}")
        else:
            stack.append((disks-1,auxiliary,destination,source))
            stack.append((1,source,destination,auxiliary))
            stack.append((disks-1,source,auxiliary,destination))
N=3
TowerOfHanoi(N,'A','c','B')`,
output:`Move disk 1 from rod A to rod c
Move disk 1 from rod A to rod B
Move disk 1 from rod c to rod B
Move disk 1 from rod A to rod c
Move disk 1 from rod B to rod A
Move disk 1 from rod B to rod c
Move disk 1 from rod A to rod c`,
heading:`Python Program for Tower Of Hanoi`
},
    }
  return (
    <div>
    {aiactiveComponent === "ComponentA" && <AiComponent propsContent={AiContentObj.waterjug}/>}
    {aiactiveComponent === "ComponentB" && <AiComponent propsContent={AiContentObj.snakeladder}/>}
    {aiactiveComponent === "ComponentC" && <AiComponent propsContent={AiContentObj.tixtactoe}/>}
    {aiactiveComponent === "ComponentD" && <AiComponent propsContent={AiContentObj.boxlinegame}/>}
    {aiactiveComponent === "ComponentE" && <AiComponent propsContent={AiContentObj.tspvalue}/>}
    {aiactiveComponent === "ComponentF" && <AiComponent propsContent={AiContentObj.minjumps}/>}
    {aiactiveComponent === "ComponentH" && <AiComponent propsContent={AiContentObj.towerofhanoi}/>}
   </div>
  )
}
