from models import storage


def verifyDetails(args):
    """ Verify if a payload request is valid"""
    for i in args.values():
        if i == None:
            return (False)
    return (True)

