def say_hello name, age
  my_var = 'hello world'
  puts "hello #{name} and you are #{age}"
  my_var
end

return_val = say_hello 'Alice', 42

puts return_val
