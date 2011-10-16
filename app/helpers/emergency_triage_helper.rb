module EmergencyTriageHelper
  def check_box_item(name, label_class = nil)
    label_class = name unless label_class
    label_class = "translate_#{label_class}"
    id = "check_box_#{name}"

    check_box_tag(name, name, false, :id => id) + ' ' + label_tag(id, nil, :class => label_class)
  end
  
  def radio_item(name, value, label_class = nil, text = nil)
    label_class = name unless label_class
    label_class = "translate_#{label_class}"
    id = "#{name}_#{value}"

    radio_button_tag(name, value) + label_tag(id, text, :class => label_class)
  end
  
  def yes_no_item(name)
    radio_item(name, :yes, :yes) + ' ' + radio_item(name, :no, :no)
  end
  
  def text_field_item(name, label_class = nil, size = 2, label_first = false)
    label_class = name unless label_class
    label_class = "translate_#{label_class}"
    id = "text_field_#{name}"

    tf = text_field_tag(name, nil, :id => id, :size => size)
    label = label_tag(id, nil, :class => label_class)
    return label + ' ' + tf if label_first
    tf + ' ' + label
  end
end
