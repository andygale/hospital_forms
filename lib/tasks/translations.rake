namespace :translations do
  desc 'Exports translations to csv'
  task :export => :environment do
    require 'csv'
    tr = YAML::load(File.open("config/locales/en.yml"))
    locales = tr.keys.sort
    string_keys = tr['en-US'].keys.sort
    CSV.open("config/locales/translations.csv", "wb") do |csv|
      csv << ["key"] + locales
      string_keys.each do |key|
        row = [key]
        locales.each {|locale| row << tr[locale][key] || ''}
        csv << row
      end
    end
  end

  desc 'Import translations from csv'
  task :import => :environment do
    require 'csv'
    arr_of_arrs = CSV.read("config/locales/translations.csv")
    arr_of_arrs.delete_at(0) # English, etc (human readable)
    header = arr_of_arrs.delete_at(0) # Take off the header row
    header.delete_at(0) # strip off 'key'
    locales = header.map{|v| v.to_s}
    tr = {}
    locales.each {|locale| tr[locale] = {}}
    arr_of_arrs.each do |row|
      key = row.delete_at(0).to_s
      row.each_with_index do |value, index|
        # puts"#{key} #{index} #{locales[index]} #{value} #{value.nil?}"
        tr[locales[index]][key] = value.to_s
      end
    end
    File.open('config/locales/en.yml', 'w') do |out|
      out << tr.to_yaml
    end
  end
end  
