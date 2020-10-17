 /**
 * NodeJS Logger written by depascaldc
 * 
 * Copyright (C) 2020 | depascaldc - All Rights Reserved
 * 
 * You may use, distribute and modify this code under the
 * terms of the GPL-3.0 license, which unfortunately won't be
 * written for another century.
 * 
 * You should have received a copy of the GPL-3.0 license with
 * this file. If not, please write to: , or visit : https://www.gnu.org/licenses/gpl-3.0.txt
 *
 */

module.exports = class ConsoleColors {

     static RESET = "\u001b[0m";
     
     static DIM = "\u001b[2m"
     static UNDERSCORE = "\u001b[4m"
     static BLINK = "\u001b[5m"
     static REVERSE = "\u001b[7m"
     static HIDDEN = "\u001b[8m"

     static BLACK = "\u001b[0;30m";
     static RED = "\u001b[0;31m";
     static GREEN = "\u001b[0;32m";
     static YELLOW = "\u001b[0;33m";
     static BLUE = "\u001b[0;34m";
     static PURPLE = "\u001b[0;35m";
     static CYAN = "\u001b[0;36m";
     static WHITE = "\u001b[0;37m";

     static BLACK_BOLD = "\u001b[1;30m";
     static RED_BOLD = "\u001b[1;31m";
     static GREEN_BOLD = "\u001b[1;32m";
     static YELLOW_BOLD = "\u001b[1;33m";
     static BLUE_BOLD = "\u001b[1;34m";
     static PURPLE_BOLD = "\u001b[1;35m";
     static CYAN_BOLD = "\u001b[1;36m";
     static WHITE_BOLD = "\u001b[1;37m";

     static BLACK_UNDERLINED = "\u001b[4;30m";
     static RED_UNDERLINED = "\u001b[4;31m";
     static GREEN_UNDERLINED = "\u001b[4;32m";
     static YELLOW_UNDERLINED = "\u001b[4;33m";
     static BLUE_UNDERLINED = "\u001b[4;34m";
     static PURPLE_UNDERLINED = "\u001b[4;35m";
     static CYAN_UNDERLINED = "\u001b[4;36m";
     static WHITE_UNDERLINED = "\u001b[4;37m";

     static BLACK_BACKGROUND = "\u001b[40m";
     static RED_BACKGROUND = "\u001b[41m";
     static GREEN_BACKGROUND = "\u001b[42m";
     static YELLOW_BACKGROUND = "\u001b[43m";
     static BLUE_BACKGROUND = "\u001b[44m";
     static PURPLE_BACKGROUND = "\u001b[45m";
     static CYAN_BACKGROUND = "\u001b[46m";
     static WHITE_BACKGROUND = "\u001b[47m";

     static BLACK_BRIGHT = "\u001b[0;90m";
     static RED_BRIGHT = "\u001b[0;91m";
     static GREEN_BRIGHT = "\u001b[0;92m";
     static YELLOW_BRIGHT = "\u001b[0;93m";
     static BLUE_BRIGHT = "\u001b[0;94m";
     static PURPLE_BRIGHT = "\u001b[0;95m";
     static CYAN_BRIGHT = "\u001b[0;96m";
     static WHITE_BRIGHT = "\u001b[0;97m";

     static BLACK_BOLD_BRIGHT = "\u001b[1;90m";
     static RED_BOLD_BRIGHT = "\u001b[1;91m";
     static GREEN_BOLD_BRIGHT = "\u001b[1;92m";
     static YELLOW_BOLD_BRIGHT = "\u001b[1;93m";
     static BLUE_BOLD_BRIGHT = "\u001b[1;94m";
     static PURPLE_BOLD_BRIGHT = "\u001b[1;95m";
     static CYAN_BOLD_BRIGHT = "\u001b[1;96m";
     static WHITE_BOLD_BRIGHT = "\u001b[1;97m";

     static BLACK_BACKGROUND_BRIGHT = "\u001b[0;100m";
     static RED_BACKGROUND_BRIGHT = "\u001b[0;101m";
     static GREEN_BACKGROUND_BRIGHT = "\u001b[0;102m";
     static YELLOW_BACKGROUND_BRIGHT = "\u001b[0;103m";
     static BLUE_BACKGROUND_BRIGHT = "\u001b[0;104m";
     static PURPLE_BACKGROUND_BRIGHT = "\u001b[0;105m";
     static CYAN_BACKGROUND_BRIGHT = "\u001b[0;106m";
     static WHITE_BACKGROUND_BRIGHT = "\u001b[0;107m";

     static ALL_COLORS = [
         ConsoleColors.RESET,
         ConsoleColors.BLINK,
         ConsoleColors.BLACK,
         ConsoleColors.RED,
         ConsoleColors.GREEN,
         ConsoleColors.YELLOW,
         ConsoleColors.BLUE,
         ConsoleColors.PURPLE,
         ConsoleColors.CYAN,
         ConsoleColors.WHITE,
         ConsoleColors.BLACK_BOLD,
         ConsoleColors.RED_BOLD,
         ConsoleColors.GREEN_BOLD,
         ConsoleColors.YELLOW_BOLD,
         ConsoleColors.BLUE_BOLD,
         ConsoleColors.PURPLE_BOLD,
         ConsoleColors.CYAN_BOLD,
         ConsoleColors.WHITE_BOLD,
         ConsoleColors.BLACK_UNDERLINED,
         ConsoleColors.RED_UNDERLINED,
         ConsoleColors.GREEN_UNDERLINED,
         ConsoleColors.YELLOW_UNDERLINED,
         ConsoleColors.BLUE_UNDERLINED,
         ConsoleColors.PURPLE_UNDERLINED,
         ConsoleColors.CYAN_UNDERLINED,
         ConsoleColors.WHITE_UNDERLINED,
         ConsoleColors.BLACK_BACKGROUND,
         ConsoleColors.RED_BACKGROUND,
         ConsoleColors.GREEN_BACKGROUND,
         ConsoleColors.YELLOW_BACKGROUND,
         ConsoleColors.BLUE_BACKGROUND,
         ConsoleColors.PURPLE_BACKGROUND,
         ConsoleColors.CYAN_BACKGROUND,
         ConsoleColors.WHITE_BACKGROUND,
         ConsoleColors.BLACK_BRIGHT,
         ConsoleColors.RED_BRIGHT,
         ConsoleColors.GREEN_BRIGHT,
         ConsoleColors.YELLOW_BRIGHT,
         ConsoleColors.BLUE_BRIGHT,
         ConsoleColors.PURPLE_BRIGHT,
         ConsoleColors.CYAN_BRIGHT,
         ConsoleColors.WHITE_BRIGHT,
         ConsoleColors.BLACK_BOLD_BRIGHT,
         ConsoleColors.RED_BOLD_BRIGHT,
         ConsoleColors.GREEN_BOLD_BRIGHT,
         ConsoleColors.YELLOW_BOLD_BRIGHT,
         ConsoleColors.BLUE_BOLD_BRIGHT,
         ConsoleColors.PURPLE_BOLD_BRIGHT,
         ConsoleColors.CYAN_BOLD_BRIGHT,
         ConsoleColors.WHITE_BOLD_BRIGHT,
         ConsoleColors.BLACK_BACKGROUND_BRIGHT,
         ConsoleColors.RED_BACKGROUND_BRIGHT,
         ConsoleColors.GREEN_BACKGROUND_BRIGHT,
         ConsoleColors.YELLOW_BACKGROUND_BRIGHT,
         ConsoleColors.BLUE_BACKGROUND_BRIGHT,
         ConsoleColors.PURPLE_BACKGROUND_BRIGHT,
         ConsoleColors.CYAN_BACKGROUND_BRIGHT,
         ConsoleColors.WHITE_BACKGROUND_BRIGHT
     ];

     static stripColors(message) {
         for (var color of ConsoleColors.ALL_COLORS) {
             if (message.includes(color))
                 message = message.split(color).join("")
         }
         return message;
     }

 }