# block is repetitive code that is denoted with do..end
# blocks, procs, and lambdas
# Proc is a block stored in memory (procedure)
# Lambda is a block stored in memory that cares about how many args get passed to it

names = ['Alice', 'Bob', 'Carol']

# names.each do |name|
#   puts "hello #{name}"
# end

# my_block = Proc.new do |name|
#   puts "hello #{name}!!!!"
# end

my_block = lambda do |name, index|
  puts "hello #{name}!!!!"
end

names.each_with_index &my_block

cats = ['Mika', 'Molly', 'Voodoo', 'Sylvester', 'Catrick Swayze']

cats.each &my_block
