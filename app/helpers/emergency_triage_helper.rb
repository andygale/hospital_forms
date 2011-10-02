module EmergencyTriageHelper
  def check_box_item(name)
    check_box_id = "check_box_#{name}"
    check_box_tag(name, name, false, :id => check_box_id) + ' ' + label_tag(check_box_id, '', :id => name)
  end
  
  def radio_item(name, value, text)
    radio_button_tag(name, value) + label_tag(name, text)
  end
end
