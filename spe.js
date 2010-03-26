speFun = function() {

  return {

    // 16 colour ansi code mapping with rgb hex values
    cols: {

      'black':         {'ansi': '\[\033[0;30m', 'hex': '#000000'},
      'red':           {'ansi': '\[\033[0;31m', 'hex': '#0000A0'},
      'green':         {'ansi': '\[\033[0;32m', 'hex': '#00A000'},
      'brown':         {'ansi': '\[\033[0;33m', 'hex': '#A0A000'},
      'blue':          {'ansi': '\[\033[0;34m', 'hex': '#A000A0'},
      'magneta':       {'ansi': '\[\033[0;35m', 'hex': '#00A0A0'},
      'cyan':          {'ansi': '\[\033[0;36m', 'hex': '#0040A0'},
      'lightgrey':     {'ansi': '\[\033[0;37m', 'hex': '#A0A0A0'},
      'darkgrey':      {'ansi': '\[\033[1;30m', 'hex': '#000000'},
      'lightred':      {'ansi': '\[\033[1;31m', 'hex': '#0000A0'},
      'lightgreen':    {'ansi': '\[\033[1;32m', 'hex': '#0000A0'},
      'yellow':        {'ansi': '\[\033[1;33m', 'hex': '#0000A0'},
      'lightblue':     {'ansi': '\[\033[1;34m', 'hex': '#0000A0'},
      'lightmagneta':  {'ansi': '\[\033[1;35m', 'hex': '#0000A0'},
      'lightcyan':     {'ansi': '\[\033[1;36m', 'hex': '#0000A0'},
      'white':         {'ansi': '\[\033[1;37m', 'hex': '#0000A0'},

    },

    codes: {

      'colour': [],
      'underline': [],
      'blink': [],
      'reverse': [],

    },

    updatePreview: function() {

      textObj = $('#edit');
      text = textObj[0].value;
      console.log(text);
      len = text.length;

      console.log(len);

      out = '';

      hasSpan = false;

      for (i = 0; i < len; i++) {

        newStyles = [];
        newClasses = [];

        if (this.codes.colour[i]) {
          newStyles.append('color: ' + this.codes.colour[i]);
        }

        if (newStyles) {
          style = newStyles.join(';');
        }

        if (newClasses) {
          class = newClasses.join(' ');
        }

        if (style || class) {

          if (hasSpan) {
            out += '</span>';
          }

          out += '<span';

          if (class) {
            out += ' class="' + class + '"';
          }

          if (style) {
            out += ' style="' + style + '"';
          }

          hasSpan = true;

        }

        out += text[i];

      }

      if (hasSpan) {
        out += '</span>';
      }

      $('#preview').html(out);

    },

    test: function() {

      this.codes.colour[5] = this.cols[2];

    }

  }

};

$(document).ready(function() {
    spe = speFun();
    spe.test();
    spe.updatePreview();
});

